const myViewModel = {
    // Observables and functions for above and below array splitter section
    selectedArray: ko.observable(''),
    inputForArray: ko.observable(''),
    numberAbove: ko.observable(''),
    numberBelow: ko.observable(''),
    splitSelectedArray: function () {
        const input = myViewModel.inputForArray();
        let arr = myViewModel.selectedArray();
        
        let nums = arr.replace(/[\[\]]/g, "").split(',').map(function(val) {
            return parseInt(val);
        });
        
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
    },
    resetValues: function() {
        myViewModel.selectedArray('');
        myViewModel.inputForArray('');
        myViewModel.numberAbove('');
        myViewModel.numberBelow('');
        myViewModel.stringToRotate('');
        myViewModel.rotateNum('');
        myViewModel.rotatedString('');
    },
    // Observables and functions for string rotator
    stringToRotate: ko.observable(''),
    rotateNum: ko.observable(''),
    rotatedString: ko.observable(''),
    rotator: function () {
        let str = myViewModel.stringToRotate();

        let sliced = str.slice(-parseInt(myViewModel.rotateNum()));

        let leftOver = str.substr(0, (str.length - parseInt(myViewModel.rotateNum())));

        myViewModel.rotatedString(sliced + leftOver);
    }
}
