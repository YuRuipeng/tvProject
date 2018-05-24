var shopping = {
    data:{
        server:[],
        check: '',
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
            this.server.forEach((item)=>{return item.isSelect = this.check})
        },
        getSelect:function(){
            this.check = this.server.every((item)=>{return item.isSelect == true})
            
        },
        del:function(i){
            this.server=this.server.filter(item=>item!==i);
        }
    },
    mounted:function(){
        shopping.init();
    },
})