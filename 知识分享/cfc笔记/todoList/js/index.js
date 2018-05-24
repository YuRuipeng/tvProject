var todoList = {
    data: {
        msg: '',
        dataList: [],
        nav: [{ title: '全部', hash: 'all' }, { title: '已完成', hash: 'finish' }, { title: '待完成', hash: 'wait' }],
        number: 0,
        pyhon: 0,
        amend: true,
        state: 'all',
    },
    init: function () {
        this.onload();
    },
    onload: function () {

    }
}
var vm = new Vue({
    el: '#todoList',
    data: todoList.data,
    computed: {
        str() {
            return this.dataList.filter(item => !item.isCheck).length;
        },
        list() {
            this.dataList = JSON.parse(window.localStorage.getItem('list'));
            if (this.state == 'all') {
                return this.dataList;
            } else if (this.state == 'finish') {
                return this.dataList.filter(function (item) {
                    return item.isCheck == true;
                })
            } else if (this.state == 'wait') {
                return this.dataList.filter(function (item) {
                    return item.isCheck == false;
                })
            }

        },
    },
    methods: {
        add: function (e) {
            var _this = this
            if (e.keyCode == 13) {
                _this.dataList.push({ text: _this.msg, isCheck: false, amend: true });
                _this.msg = '';
                _this.store();
            }
        },
        change: function () {
            var _this = this;
            this.store();
        },
        active: function (e, hash) {
            var _this = this;
            _this.number = e;
            _this.state = hash;
        },
        del: function (k) {
            this.dataList = this.dataList.filter(item => item !== k);
            this.store();
        },
        amendb: function (i) {
            var _this = this;
            _this.dataList[i].amend = false;
            _this.store();
        },
        hidInput: function (i) {
            var _this = this;
            _this.dataList[i].amend = true;
            _this.store();
        },
        store: function(){
            var d = JSON.stringify(this.dataList);
            window.localStorage.setItem('list', d);
        }
    },
    mounted: function () {
        todoList.init();
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus();
            }
        },
    },
})
