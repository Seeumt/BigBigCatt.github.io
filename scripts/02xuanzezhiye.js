function displayResult(item, val, text) {
    console.log(item);
    $('.alert').show().html('You selected <strong>' + val + '</strong>: <strong>' + text + '</strong>');
}

$(function () {

    $('#demo2').typeahead({
        source: [
            { ID: 1, Name: '产品经理' },
            { ID: 2, Name: 'UI设计师' },
            { ID: 3, Name: '前端工程师' },
            { ID: 4, Name: 'java工程师' },
            { ID: 5, Name: '产品运营专员' },
            { ID: 6, Name: '电子商务职业经理人' },
            { ID: 7, Name: '注册会计师' },
            { ID: 8, Name: '数据开发工程师' },
            { ID: 9, Name: '网络架构师' },
            { ID: 10, Name: '产品设计' },
            { ID: 11, Name: '理财经理' },
            { ID: 12, Name: '创意总监' },
            { ID: 13, Name: 'H5页面工程师' },
            { ID: 14, Name: '项目经理' },
            { ID: 15, Name: 'IOS开发工程师' },
            { ID: 16, Name: '运营总监' },
            { ID: 17, Name: '测试工程师' },
        ],
        display: 'Name',
        val: 'ID',
        itemSelected: displayResult
    });


    $('#demo4').typeahead({
        ajax: '/cities/list',
        itemSelected: displayResult
    });

    $('#demo5').typeahead({
        ajax: { url: '/cities/list', triggerLength: 1 },
        itemSelected: displayResult
    });
});

/*
var vmm=new Vue({
    el: "#selectJob",
    data: {
        datas: []
    },
    mounted:function(){
        this.showData();
        //需要执行的方法可以在mounted中进行触发，其获取的数据可以赋到data中后，可以放在前面进行渲染
    },
    methods:{
        showData:function () {
            jQuery.ajax({
                type: 'Get',
                url: "https://get-5-group.github.io/GET-APP/data/02xuanzezhiye.json",
                // data:{type:type,ext:ext},
                datatype:"json",
                success: function (data) {
                    // for(var i=0;i<data.length;i++){
                    //     vmm.datas.push(data[i]);
                    // }
                    console.log(vmm.datas);
                }
            })
        }
    }
})*/

new Vue({
    el: '#selectJob',
    data: {
        // json中的数据
        datas: [],
    },
    //组件已经加载完毕, 请求网络数据, 业务处理
    mounted(){
        // 请求本地的数据
        this.getLocalData();
    },

    methods: {
        // 1. 请求本地的数据
        getLocalData() {
            this.$http.get('https://get-5-group.github.io/GET-APP/data/02xuanzezhiye.json').then(response => {
                const res = response.body;
                console.log(res);
                if(res){
                    this.datas = res.list;
                    // console.log(this.datas);
                    // console.log(this.datas[0].content);

                }
            }, response => {
                alert('请求数据失败!');
            });
            //处理页面跳转
            // const index = "lemon";
            /*const url = "feilei.html?index="+index;*/
            /*$("section").click(function(){ window.location.href = url; });*/
        },
    }
});


