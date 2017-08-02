const myViewModel = {
    selectedArray: ko.observable(''),
    inputForArray: ko.observable(''),
    numberAbove: ko.observable(''),
    numberBelow: ko.observable(''),
    splitSelectedArray: function () {
        const input = myViewModel.inputForArray();
        let arr = myViewModel.selectedArray();
        //console.log(typeof arr);
        let nums = arr.replace(/[\[\]]/g, "").split(',').map(function(val) {
            return parseInt(val);
        });
        console.log(nums);
        
        let greater = 0;
        let lower = 0;

        nums.forEach((element) => {
            if(element > input) {
                greater ++;
            }
            if(element < input) {
                lower ++;
            }
        });
        myViewModel.numberAbove(greater);
        myViewModel.numberBelow(lower);
        console.log('above:' + greater + ', below:' + lower);
    },
    resetValues: function() {
        myViewModel.selectedArray('');
        myViewModel.inputForArray('');
        myViewModel.numberAbove('');
        myViewModel.numberBelow('');
    }
}
