class Main {
    static int[] selectionSort(int arr[]) {
        for (int i = 0; i < arr.length - 1; i++) {
            int min_index = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min_index]) {
                    min_index = j;
                }
            }
            if (min_index != i) {
                int temp = arr[i];
                arr[i] = arr[min_index];
                arr[min_index] = temp;
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        int a[] = {92, 39, 27, 84, 26, 0, 26, 95, 24, 56};
        int new_array[] = selectionSort(a);
        for (int num : new_array) {
            System.out.print(num + " ");
        }
    }
}
