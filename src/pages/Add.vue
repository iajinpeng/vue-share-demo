<template>
    <Form ref="form" :model="form" :rules="rule">
        <FormItem prop="name">
            <Input type="text" v-model="form.name" placeholder="name">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="age">
            <Input type="text" v-model="form.age" placeholder="age">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="address">
            <Input type="text" v-model="form.address" placeholder="address">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('form')">确定添加</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default{
        data () {
            return {
                form: {
                    name: '',
                    age: '',
                    address: ''
                },
                rule: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: '请输入年龄', trigger: 'blur' },
                        { type: 'string', max: 3, message: '有这么大的人吗?', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入地址', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
//                        this.$store.dispatch('addRow', this.form);
                        this.$store.commit('ADD_ROW', this.form);
                        this.$Message.success('添加成功!');
                        this.$router.push({path: 'table'})
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>