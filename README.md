# easy-flow

## 效果图


![](https://gitee.com/xiaoka2017/resource/raw/master/easy-flow/2.2.0/1.png)


![](https://gitee.com/xiaoka2017/resource/raw/master/easy-flow/2.2.0/2.png)



## 项目介绍
`easy-flow` 基于VUE+ElementUI+JsPlumb的流程设计器，通过 vuedraggable 插件来实现左侧菜单的拖拽，拖拽结束后回调end方法,
根据鼠标所在的位置添加一个节点信息，使用jsplumb来管理该节点，设置该节点可拖拽、连线 并注册相关的事件。


## 功能
* 支持拖拽添加节点
* 鼠标移入到节点中显示 编辑、删除 操作
* 不支持节点线连接自己
* 不支持节点A与节点B之间线互连
* 点击线进行设置条件
* 支持给定数据加载流程图
* 支持画布拖拽


## 操作说明
* 左侧菜单子节点可以拖拽，将其拖拽到右侧画板中松开鼠标即可添加一个节点
* 鼠标移动到画板中的节点上，节点的右上角出现 【删除】、【编辑】图标，点击对应的图标可进行删除、编辑操作
* 节点分为2部分，图标在左上角侧，文字在下侧，鼠标从图标上可以拖拽出连线，可以连接其他节点，拖动图标意外位置可以改变节点在页面的位置

## 数据格式
``` json

{
    name: '流程C',
    nodeList: [
        {
            id: 'nodeA',
            name: '流程B-节点A',
            type: 'task',
            left: '18px',
            top: '223px',
            ico: 'el-icon-user-solid',
            state: 'success'
        },
        {
            id: 'nodeB',
            type: 'task',
            name: '流程B-节点B',
            left: '351px',
            top: '96px',
            ico: 'el-icon-goods',
            state: 'error'
        },
        {
            id: 'nodeC',
            name: '流程B-节点C',
            type: 'task',
            left: '354px',
            top: '351px',
            ico: 'el-icon-present',
            state: 'warning'
        }, {
            id: 'nodeD',
            name: '流程B-节点D',
            type: 'task',
            left: '723px',
            top: '215px',
            ico: 'el-icon-present',
            state: 'running'
        }
    ],
    lineList: [
        {
            from: 'nodeA',
            to: 'nodeB',
            label: '条件A'
        }, {
            from: 'nodeB',
            to: 'nodeC',
            label: '条件B'
        }
    ]
}

```
## data 参数说明
|    参数    |      描述      |
| :--------: | :------------: |
|  name  |     流程图名称      |

## nodeList 参数说明
|    参数    |      描述      |
| :--------: | :------------: |
|  id  |     标识唯一的节点、可以与业务ID相结合      |
|  name  |   节点名称      |
|  left  |   节点在页面上的X坐标      |
|  top  |   节点在页面上的Y坐标      |
|  ico  |   节点显示的图标      |
|  state  |   状态，可选值 success、error、warning、running      |


## lineList 参数说明
|    参数    |      描述      |
| :--------: | :------------: |
|  from  |     连线的起始节点的ID      |
|  to  |   连线的终点节点ID      |
|  label  |   条件      |

## 使用说明

* 左侧的节点名称以及图标可以自定义，在tool.vue页面menuList变量中
* 左侧的节点展开时，子节点可以拖拽到右侧画布中即可添加
* 鼠标移动到画布中节点上，节点的右上角上显示【修改】、【删除】操作链接
* 将鼠标从画布节点的左上角图标上拖动时可以拖拽出连线，然后将鼠标移动到其他节点上即可连接
* 点击画布中节点之间的连线，可以进行连线删除
