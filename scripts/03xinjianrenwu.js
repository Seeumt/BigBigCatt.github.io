import Mint from '../cpnts/mint-ui';

Vue.use(Mint);

import '../cpnts/mint-ui/lib/style.css';

import { DatetimePicker } from '../cpnts/mint-ui';
Vue.component(DatetimePicker.name,DatetimePicker);

new Vue({
    el:'#datetime',
});
export default{
    name:'#datetime',
    methods:{
        openPicker(){
            this.$refs.picker.open();
        }
    }
};
export default {
    data(){
        return{
            pickerValue:new Date("January 12,2006 22:19:35")
        }
    },
    methods: {
        openPicker() {
            this.$refs.picker.open();
        }
    }
};

