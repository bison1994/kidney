### 零件

- mask
- loading
- spinner
- progress
- anchor
- icon-angle
- icon-times
- icon-triangle
- dashline
- button

<br>

### 通用抽象

- init 初始状态
- loading 加载状态
- partial 部分加载状态
- empty 空数据状态
- error 异常状态（包括请求超时）
- ok 正常状态
- cache 缓存（keep alive）
- overflow 溢出（内容过多）
    + 折叠
    + 滚动
    + 省略
- load strategy 加载策略

<br>

### 通用组件

- 展示型
    + list
        - @extend：加载内容
        - @mixin：pullup、pulldown
        - 排序规则
        - 筛选规则
        - 分页加载
        - “没有更多了”
    + nav-header
    + tabs
    + carousel/swiper
    + collapse
    + scrollview
- 提示型
    + toast
    + dialog-modal
    + snackbars
    + steps
    + placeholder
    + popover
- 导航型
    + tabbar
    + drawer
    + grid
    + breadcrumb
- 交互型
    + pulldown
    + pullup
    + dropdown
    + action-panel
    + action-sheet
    + cascader
    + picker
    + switch
    + rate
    + slider
- 表单型
    + text-input
    + number-input
    + password-input
    + textarea
    + uploader
    + radio
    + checkbox
    + select


<br>

### 通用复杂组件

- 地址选择
- 城市选择
- 日期选择
- 日历

<br>

### 通用布局

- safe-area
- sticky
