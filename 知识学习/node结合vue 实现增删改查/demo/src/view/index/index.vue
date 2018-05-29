
<template>
    <div>
        <div class="index-top">
            <button type="button" class="btn btn-info">添加用户</button>
        </div>
        <div class="index-top">
            <div  class="index-top-list">
                <p>编号</p>
                <p>姓名</p>
                <p>年龄</p>
                <p>电话</p>
                <p>地址</p>
                <p>操作</p> 
            </div>
            <ul>
                <li>
                    <p>编号</p>
                    <p>姓名</p>
                    <p>年龄</p>
                    <p>电话</p>
                    <p>地址</p>
                    <p>
                        <button type="button" class="btn btn-info">删除</button>
                        <button type="button" class="btn btn-info">添加用户</button>
                    </p>
                </li>
            </ul>   

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{

    },
    mounted(){

    }

}
</script>
<style lang="less" scoped>

</style>


