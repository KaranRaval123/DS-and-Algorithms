class Main {
    static int[] insertionSort(int arr[]) {
        for (int i = 1; i < arr.length; i++) {
            int j;
            j = i - 1;
            while (j >= 0 && arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                j--;
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        int a[] = {92, 39, 27, 84, 26, 0, 26, 95, 24, 56};
        int new_array[] = insertionSort(a);
        for (int num : new_array) {
            System.out.print(num + " ");
        }
    }
}
