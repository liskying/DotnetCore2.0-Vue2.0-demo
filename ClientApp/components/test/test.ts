import Vue from 'vue';
import { Component } from 'vue-property-decorator';

/*
*数据规范
*/
interface ITestData {
    name: String;
    sex: String;
    interest: String[];
    identity: String;
}

/*
*构造数据
*/
var testData={
    name: "",
    sex: "",
    interest: [],
    identity:""
};

/*
*Test
*/
@Component
export default class TestComponent extends Vue {

    Data: ITestData = testData;
    Message: String = "";
    
    funSubmit(e:any){
       this.Message=JSON.stringify(this.Data);
       alert(this.Message);
    }
}
