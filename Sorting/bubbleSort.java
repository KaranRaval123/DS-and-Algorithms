class Main {
    static void bubbleSort(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - 1; j++) {
                if (arr[i] < arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int a[] = {92, 39, 27, 84, 26, 0, 26, 95, 24, 56};
        bubbleSort(a);
        
        for (int num : a) {
            System.out.print(num + " ");
        }
    }
}
