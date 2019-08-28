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