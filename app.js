const app = Vue.createApp({
data(){
    return{
        name:'',
        confirmedName:'',

    }

},
methods:{
    saveInput(event){
        this.name = event.target.value;
    },
    confirmInput(){
    this.confirmedName = this.name
    },
    onAlert(){
        alert('okey!')
    },
}
})
app.mount('#assignment')