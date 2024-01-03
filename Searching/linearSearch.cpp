#include <iostream>
using namespace std;

// int linearSearch(int arr[], int n, int target) {
//   for(int i = 0; i < n; i++) {
//     if(arr[i] == target) {
//       return i;
//     }
//   }
//   return -1;
// }

int linearSearch(int arr[], int i, int n, int target) {
  if (i < n) {
    if (arr[i] == target) {
      return i;
    }
    return linearSearch(arr, i + 1, n, target);
  }
  return -1;
}

int main() {
  int a[5] = {1, 2, 3, 4, 5};
  int ans = linearSearch(a, 0, 5, 3);
  cout << ans;
  return 0;
}
