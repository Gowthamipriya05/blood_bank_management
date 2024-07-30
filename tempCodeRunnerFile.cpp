void findindexes(vector<int> arr,int target , int idx, int n, vector<int> &ans){
  if(target==0 && idx<n){
   return ans;
   }

   if(target<0 || idx>=n){
     Return {};
    }

   ans.push_back(idx);
findindexes(arr,target-arr[idx],idx+1,n,ans);

ans.pop_back();
findindexes(arr,target,idx+1,n,ans);

}

int main(){
     vector<int> arr={2,3,11,5,6};
     int n=arr.size();
      vector<int> ans;
      int target=5;
     findindexes(arr,target,0,n,ans);

     for(int i=0;i<ans.size();i++){
          cout<<ans[i]<<" ";
     }
     return 0;
}
