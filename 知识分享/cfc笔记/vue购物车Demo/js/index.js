var shopping = {
    data:{
        server:[],
        check: false,
        newArr: [],
    },
    init:function(){
        this.onload();
    },
    onload:function(){
        var _this = this;
        axios.get('../json/product.json',{}).then(function(res){
            console.log(res.data);
            _this.data.server = res.data;
        }).catch(function(err){
            console.log(err);
        });
    }
}
var vm = new Vue({
    el: '#shopping',
    data: shopping.data,
    computed: {
        totalPrice:function(){
            var totalPrice = 0;
            this.server.forEach(function(item,index){
                if(item.isSelect){
                    return totalPrice += item.productPrice * item.productCount
                }
            })
            return totalPrice
        }
    },
    filters:{
        retain: function(value){
            return value = value.toFixed(2)
        }
    },
    methods:{
        support:function(){
            this.check != this.check
            if(this.check == true){
                this.server.forEach(function(item,index){
                    return item.isSelect = true;
                })
            }else{
                this.server.forEach(function(item,index){
                    return item.isSelect = false;
                })
            }
        },
        getSelect:function(select){
            var _this = this;
            if(select == false){
                _this.check = false;
            }
            _this.newArr = [];
            _this.server.filter(function(item){
                if(item.isSelect){
                    _this.newArr.push(item.isSelect);
                    return _this.newArr
                }
            })
            if(_this.newArr.length === _this.server.length){
                _this.check = true;
            }
        },
        del:function(i){
            this.server=this.server.filter(item=>item!==i);
        }
    },
    mounted:function(){
        shopping.init();
    },
})