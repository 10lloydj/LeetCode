function twoSum(nums: number[], target: number): number[] {
    const targetMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (targetMap.has(target - nums[i])) {
            return [i, targetMap.get(target - nums[i])]
        }
        targetMap.set(nums[i], i);
    }
};