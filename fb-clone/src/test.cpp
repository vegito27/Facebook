#include<iostream>
using namespace std;

void pattern(int number){
    
    int half=number/2;
    int x=1;
    bool flag=true;
    
    
    
for(int i=0;i<number;i++){
    
    
    if(x<=half){
        
    if(flag){
        
    for(int j=0;j<x;j++) cout<<"*";


    for(int k=0;k<(number-x);k++)cout<<"#";
    
    x++;
    
    cout<<endl;
            
    }else{
        
    for(int j=0;j<(number-x);j++) cout<<"#";


    for(int k=0;k<x;k++)cout<<"*";
    
    x++;
    
    cout<<endl;
            
            
        }
        
        
    }else{
        
        
        
    }

}
}



int main(){

int number;

cin>>number;

pattern(number);
return 0;
}