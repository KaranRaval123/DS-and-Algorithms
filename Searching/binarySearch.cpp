#include <iostream>
using namespace std;

int binarySearchIterative(int arr[], int low, int high, int target) {
  while (low <= high) {
    int mid = low + (high - low) / 2;

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

int binarySearchRecursive(int arr[], int low, int high, int target) {
  if (low <= high) {
    int mid = low + (high - low) / 2;

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      return binarySearchRecursive(arr, mid + 1, high, target);
    } else {
      return binarySearchRecursive(arr, low, mid - 1, target);
    }
  }
  return -1;
}

int main() {
  int a[5] = {1, 2, 3, 4, 5};
  int ansIterative = binarySearchIterative(a, 0, 4, 3);
  int ansRecursive = binarySearchRecursive(a, 0, 4, 3);

  cout << "Iterative Result: " << ansIterative << endl;
  cout << "Recursive Result: " << ansRecursive << endl;

  return 0;
}
