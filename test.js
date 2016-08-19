 function Odd_filter(node){
 	if(!node){
 		return node;
 	}
 	var pre = node
 	var curr= node.next;
	 while(curr){
	 	if(typeof curr.val!=="number" || curr.val%2!==0){
	 		pre.next = curr.next;
	 	}
	 	else{
	 		pre= curr;
	 	}
	 	curr = curr.next;
	 }
	 return node.val%2===1  ? node.next : node;
 }

function reverse_filter(node){
	node = Odd_filter(node);
	if(!node){
		return node;
	}
	 var curr = node.next;
	 var pre = node;
	 while(curr){
	 	var temp = curr.next;
	 	curr.next= pre;
	 	pre = curr;
	 	curr = temp;
	 }
	  var first  = node;
	  first.next = null;
	 return pre;

}

/*
 function Node(val){
 	this.val = val;
 	this.next= null;
 }
test case




// test odd + even
 var head = new Node(1);
 temp= head;
 for(var i =2;i<=4;i++){
 	temp.next = new Node(i);
 	temp= temp.next;
 }

// test odd
 var head = new Node(1);
 temp= head;
 for(var i =1;i<=4;i++){
 	temp.next = new Node(Math.pow(2,i)+1);
 	temp= temp.next;
 }
//test null
 var head  = null;

// test odd even
var head = new Node(1);
 temp= head;
 for(var i =1;i<=4;i++){
 	temp.next = new Node(Math.pow(2,i));
 	temp= temp.next;
 }
// test even odd
var head = new Node(2);
 temp= head;
 for(var i =1;i<=4;i++){
 	temp.next = new Node(Math.pow(2,i)+1);
 	temp= temp.next;
 }

 //

  console.log(reverse_filter(head));
*/

