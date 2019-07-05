class twoSum {
    public int[] twoSum(int[] nums, int target) {
        int[] arr = new int[2];
        HashMap<Integer, Integer> dict = new HashMap<>();

        for(int i=0; i<nums.length; i++){
            if(dict.containsKey(target - nums[i])){
                arr[0] = dict.get(target-nums[i]);
                arr[1] = i;
                
            }else{
                dict.put(nums[i],i);
            }
        }
        return arr;

    }
}