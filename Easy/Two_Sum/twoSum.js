var twoSum = function(nums, target) {
    obj = {};
    for(var i =0; i<nums.length; i++){
        if(target-nums[i] in obj){
            return [obj[target-nums[i]], i]
        }else{
            obj[nums[i]] =i;
        }
    }
};