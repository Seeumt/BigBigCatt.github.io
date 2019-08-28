new Vue({
    el: '#user',
    data: {
        // 数据库中的数据
        encourageWords:"",
        capacityValue:"",
        goldScore:"",
        recordXiaorizi:"",
        recordTuibian:"",
        usingDays:""

    },
    //组件已经加载完毕, 请求网络数据, 业务处理
    mounted(){
        // 请求本地的数据
        this.getLocalData();
    },

    methods: {
        // 1. 请求本地的数据
        getLocalData() {
            this.$http.get('http://localhost:8080/api/users/getUser/12345678901').then(response => {
                const res = response.body;
                console.log(res);
                if(res){
                    this.encourageWords = res.encourageWords;
                    this.capacityValue = res.capacityValue;
                    this.goldScore = res.goldScore;
                    this.recordXiaorizi = res.recordXiaorizi;
                    this.recordTuibian = res.recordTuibian;
                    this.usingDays = res.usingDays;
                    console.log(this.encourageWords);
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





// let app = new Vue({
//     el: '#user',
//     data: {
//         // 数据库中的数据
//         encourageWords:"",
//         capacityValue:"",
//         goldScore:"",
//         recordXiaorizi:"",
//         recordTuibian:"",
//     },
//     //组件已经加载完毕, 请求网络数据, 业务处理
//     mounted(){
//         // 请求本地的数据
//         this.getLocalData();
//     },
//
//     methods: {
//         // 1. 请求本地的数据
//         getLocalData() {
//             qwest.setDefaultOptions({ cache: true });
//             qwest.get('http://localhost:8080/api/users/getUser/12345678901',
//                 {
//                     encourageWords:app.encourageWords,
//                     capacityValue:app.capacityValue,
//                     goldScore:app.goldScore,
//                     recordXiaorizi:app.recordXiaorizi,
//                     recordTuibian:app.recordTuibian
//                 })
//
//             //处理页面跳转
//             // const index = "lemon";
//             /*const url = "feilei.html?index="+index;*/
//             /*$("section").click(function(){ window.location.href = url; });*/
//         },
//     }
// });