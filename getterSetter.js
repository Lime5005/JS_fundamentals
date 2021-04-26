let obj = {
    prop1: '1',
    get prop() {
        console.log('ok');
        return this.prop1;
    },
    set prop(val) {
        console.log(`set the prop1 as ${val}`);
        this.prop1 = val;
    }
}
console.log(obj); //{ prop1: '1', prop: [Getter] }
console.log(obj.prop); //ok, 1
obj.prop = '2';
console.log(obj); //{ prop1: '2', prop: [Getter/Setter] }
console.log(obj.prop); //set the prop1 as 2, ok, 2