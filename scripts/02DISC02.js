
var app02 = new Vue({
    el: '#content',
    data: {
        contents: [
            {
                classname: {
                    'class1' : true,
                    'class2' : false,
                    'class3' : false,
                    'class4' : false,
                    'class5' : false,
                    'class6' : false,
                },
                name: '1.你觉得下列哪个选项更适合你?',
                labels: [
                    { labelname:"富于冒险：愿意面对新事物并敢于下决心掌握的人；" },
                    { labelname:"适应力强：轻松自如适应任何环境；" },
                    { labelname:"生动：充满活力,表情生动,多手势；" },
                    { labelname:"善于分析：喜欢研究各部分之间的逻辑和正确的关系。" }
                ]
            },
            {
                classname: {
                    'class1' : false,
                    'class2' : true,
                    'class3' : false,
                    'class4' : false,
                    'class5' : false,
                    'class6' : false,
                },
                name: '2.你觉得下列哪个选项更适合你?',
                labels: [
                    { labelname:"坚持不懈：要完成现有的事才能做新的事情；" },
                    { labelname:"喜好娱乐：开心充满乐趣与幽默感；" },
                    { labelname:"善于说服：用逻辑和事实而不用威严和权利服人；" },
                    { labelname:"平和：在冲突中不受干扰，保持平静。" }
                ]
            },
            {
                classname: {
                    'class1' : false,
                    'class2' : false,
                    'class3' : true,
                    'class4' : false,
                    'class5' : false,
                    'class6' : false,
                },
                name: '3.你觉得下列哪个选项更适合你?',
                labels: [
                    { labelname:"顺服：易接受他人的观点和喜好，不坚持己见；" },
                    { labelname:"自我牺牲：为他人利益愿意放弃个人意见；" },
                    { labelname:"善于社交：认为与人相处是好玩，而不是挑战或者商业机会；" },
                    { labelname:"意志坚定：决心以自己的方式做事。" }
                ]
            },
            {
                classname: {
                    'class1' : false,
                    'class2' : false,
                    'class3' : false,
                    'class4' : true,
                    'class5' : false,
                    'class6' : false,
                },
                name: '4.你觉得下列哪个选项更适合你?',
                labels: [

                    { labelname:"体贴：关心别人的感受与需要；" },
                    { labelname:"竞争性：把一切当作竞赛，总是有强烈的赢的欲望；" },
                    { labelname:"自控性：控制自己的情感，极少流露。" },
                    { labelname:"使人认同：因人格魅力或性格使人认同；" }
                ]
            },
            {
                classname: {
                    'class1' : false,
                    'class2' : false,
                    'class3' : false,
                    'class4' : false,
                    'class5' : true,
                    'class6' : false,
                },
                name: ' 5.你觉得下列哪个选项更适合你?',
                labels: [
                    { labelname:"使人振作：给他人清新振奋的刺激；" },
                    { labelname:"尊重他人：对人诚实尊重；" },
                    { labelname:"善于应变：对任何情况都能作出有效的反应；" },
                    { labelname:"含蓄：自我约束情绪与热忱。" }
                ]
            },
            {
                classname: {
                    'class1' : false,
                    'class2' : false,
                    'class3' : false,
                    'class4' : false,
                    'class5' : false,
                    'class6' : true,
                },
                name: '6.你觉得下列哪个选项更适合你?',
                labels: [
                    { labelname:"生机勃勃：充满生命力与兴奋；" },
                    { labelname:"满足：容易接受任何情况与环境；" },
                    { labelname:"敏感：对周围的人事过分关心；" },
                    { labelname:"自立：独立性强，只依靠自己的能力、判断、与才智。" }
                ]
            },
        ]
    }
})
