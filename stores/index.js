export const state=()=>({
    token: localStorage.getItem('token') || '',
    user: {},
    product: []
})

export const getters = {
    user:(state)=>{
        return state.user
    },
    token:(state) => {
        return state.token
    }
}

export const mutations = {
    setUser(state, user){
        state.user = user
    },
    setToken(state, token){
        state.token = token
    }
}

export const actions = {
    async createUser(_, data){
        const res = await this.$axios.$get('http://localhost/php-api-with-jwt-auth/auth-file/create-user.php', data);

        if(res.data.status == 1){
            alert(res.data.message)
            data.name="",
            data.email="",
            data.password=""
            this.$router.push('/login')
        }else{
            alert(res.data.message)
        }
        //console.log(res);
    },
    async loginUser({ commit }, data){
        const res = await this.$axios.$get('http://localhost/php-api-with-jwt-auth/auth-file/login-user.php', data);
        if(res.data.status == 1){
            data.email="",
            data.password=""
            localStorage.setItem('token',res.data.jwt);
            commit('setToken',re.data.jwt);
            alert(res.data.message)
            this.$router.push('/')
        }else{
            alert(res.data.message)
        }
        //console.log(res);
    },
    async createProduct(_, data){
        const config = {
            headers : {
                "Authorization": localStorage.getItem ('token')
            }
        };
        const res= await this.$axios.$get('http://localhost/php-api-with-jwt-auth/crud-file/create-product.php', data);

        if(res.data.status == 1){
            alert(res.data.message)
            data.title="",
            data.content="",
            data.price=""
            this.$router.push('/products')
        }else{
            alert(res.data.message)
        }
        //console.log(res);
    },
}