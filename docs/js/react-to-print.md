# 打印分页处理（react-to-print）
## 前言
在最近一次需求中，遇到一个打印需求。需求内容大概为：打印内容有固定表头、打印需要分页展示、打印不展示浏览器的网址信息。
刚好项目中已经引入了`react-to-print`，所以就使用了这个库来实现打印功能。
页面元素大概如下：
```html
<PrintBox>
    <div>打印内容</div>
    ...打印内容
</PrintBox>
```
## 打印内容有固定表头和分页划分
### 1. 定义纸张对应的像素大小，算法如下：
```javascript
export const usePrintConfig = () => {
  // A4 纸张尺寸为 210mm * 297mm
  // 1英寸 约等于 25.4mm
  // 假设屏幕分辨率为 96dpi，宽度（像素）= 210毫米 × 96dpi ÷ 25.4。
  // 这个R就是像素密度
  const R = 96 / 25.4;
  // A4 纸张宽高比
  const WR = 210 / 297;

  const width = 210 * R + 100;
  const height = 297 * R + 100 / WR;
  // 左右间隔 mm -> px，这里设置左右间隔为 20mm
  const paddingLR = R * 20;

  return { width, height, paddingLR, R, WR };
};
```
### 2. 按高度成多个页面
`PrintBox`自动划分`children`的实现：
```javascript
// usePrintPages的实现
const usePrintPages = function (children) {
  // fake内容的ref，用于计算分页高度
  const innerRef = useRef(null);
  // 表头ref，用于获取固定头部的高度
  const headerRef = useRef(null);
  // 拆分成多少个页面
  const [printPages, setPrintPages] = useState([]);
  // 打印配置的页面高度（像素）
  const { height } = usePrintConfig();

  // 计算内容分几页展示
  const calcPrintPages = useCallback(() => {
    // 获取内容dom
    const dom = innerRef.current;
    const headerDom = headerRef.current;
    // 获取固定头部的高度
    const headerHeight = headerDom ? headerDom.offsetHeight : 0;
    // 可放下的内容高度
    const contentHeight = height - headerHeight - 50;
    // 分页内容
    const pages = [];
    if (!dom) return pages;
    // 克隆节点
    const cloneNode = (start, end) => {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(dom.childNodes[i].cloneNode(true));
      }
      return result;
    };
    // 计算分页高度
    let nextEnd = 0;
    dom.childNodes.forEach((node, index) => {
      const preNode = dom.childNodes[index - 1];
      const nodeTop = preNode
        ? Number(preNode.dataset.top || 0) + node.offsetHeight
        : node.offsetHeight;
      // 记录节点的高度
      node.dataset.top = nodeTop.toString();
      // 如果节点高度超过可放下的内容高度，则分页
      if (nodeTop > contentHeight) {
        node.dataset.top = node.offsetHeight;
        pages.push(cloneNode(nextEnd, index));
        nextEnd = index;
      }
    });
    // 如果最后一个节点没有超过可放下的内容高度，则分页
    if (nextEnd !== dom.childNodes.length) {
      pages.push(cloneNode(nextEnd, dom.childNodes.length));
    }
    // 如果没有分页，则克隆所有节点
    if (!pages.length) {
      pages.push(cloneNode(0, dom.childNodes.length));
    }
    return pages;
  }, [height]);

  useEffect(() => {
    setPrintPages(calcPrintPages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calcPrintPages, children]);

  return [innerRef, headerRef, printPages];
};
```
### 3. 打印内容分页展示呈现
```javascript
// PrintBox 的实现
const PrintBox = forwardRef((props, ref) => {
  const { children, headerProps } = props;
  // 获取打印内容的ref，用于计算分页高度
  const [innerRef, headerRef, printPages] = usePrintPages(children);
  const { width, paddingLR } = usePrintConfig();

  // fakeContainer 样式为：position: fixed; visibility: hidden; left: -100%; top: -9999px; z-index: -9999;
  return (
    <>
      {/* 用于计算固定头部的高度 */}
      <div
        ref={headerRef}
        style={{ width, padding: `0 ${paddingLR}px` }}
        className={styles.fakeContainer}
      >
        <Header {...headerProps} />
      </div>
      {/* 用于计算分页高度 */}
      <div
        ref={innerRef}
        style={{ width, padding: `0 ${paddingLR}px` }}
        className={styles.fakeContainer}
      >
        {children}
      </div>
      {/* 实际打印内容 */}
      <div className={styles.printBox} ref={ref}>
        {printPages.map((page, index) => (
          <Page
            key={index}
            pageNo={index + 1}
            pageTotal={printPages.length}
            headerProps={headerProps}
            doms={page}
          />
        ))}
      </div>
    </>
  );
});
```

## 打印不展示网址
在打印布局时默认会展示浏览器的网址信息，我们需要用打印内容覆盖整个纸张大小就可以做到不展示网址信息。
我是这样实现的：
```css
/* 规定打印内容和纸张大小固定为 A4 纸大小 */
@page { margin: 0; size: A4; }
/* 在打印时不要对颜色进行任何调整，以确保打印结果与屏幕上的颜色一致 */
body { -webkit-print-color-adjust: exact; }
/* 打印的每页样式 */
.print-page {
    box-sizing: border-box;
    word-break: break-all;
    /* 需要分页 */
    page-break-before: always;
}
```
## 缺点
1. 由于是通过`clone`节点实现分页，所以如果`children`中有`ref`，则会导致`ref`失效。
2. dom内容的高度计算是只计算了外层的节点，并且只对外层进行了分页，这需要传入的`children`都是一行行布局的
3. 使用如`ul`、`table`等标签时，需要自己实现分页（都在同一页），否则会导致分页不准确。
4. `useEffect`去监听了`children`的改变，但是并未用`children`的内容

## 总结
上述代码中我用`useEffect`去监听了`children`的改变，首先将原有内容渲染至页面之外（pos: fixed）,
然后根据实际渲染的高度减去页面头部和尾部分的高度，进行页面拆分，最后将每页的`dom`内容`clone`到对应的`Page`中，从而实现自动分页效果。

对于打印不展示网址的问题，通过固定打印的`size`实现对网址内容的覆盖。

