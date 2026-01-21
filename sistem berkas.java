import java.util.*;  
 
class GFG{  
 	 
static int size = 8;  static int disk_size = 200;  
 
public static void LOOK(int arr[], int head,  
 	 	 	 	 	 	String direction)  
{  
 	int seek_count = 0;   	int distance, cur_track;  
 	 
 	Vector<Integer> left = new Vector<Integer>();  
 	Vector<Integer> right = new Vector<Integer>();  
Vector<Integer> seek_sequence = new Vector<Integer>();  
 
// Appending values which are  
// currently at left and right  
 	// direction from the head.   	for(int i = 0; i < size; i++)  
 	{  
 	 	if (arr[i] < head)  
 	 	 	left.add(arr[i]);  
 	 	if (arr[i] > head)  
 	 	 	right.add(arr[i]);  
 	}  
 	 
 	// Sorting left and right vectors  
 	// for servicing tracks in the   	// correct sequence.  
 	Collections.sort(left);  
 	Collections.sort(right);  
 	 
 	// Run the while loop two times.  
 	// one by one scanning right   	// and left side of the head  
 	int run = 2;  
while (run-- > 0)  
{  
	 	if (direction == "left")  
	 	{  
	 	for(int i = left.size() - 1;  
	 	 	 	 	i >= 0; i--)  
	 	 	{  
	 	 	 	cur_track = left.get(i);  
 	 
 	 	 	 	// Appending current track to  
 	 	 	 	// seek sequence  
 	 	 	 	seek_sequence.add(cur_track);  
 	 
 	 	 	 	// Calculate absolute distance   	 	 	 	distance = Math.abs(cur_track - head);  
 	 
 	 	 	 	// Increase the total count   	 	 	 	seek_count += distance;  
 	 
 	 	 	 	// Accessed track is now the new head  
 	 	 	 	head = cur_track;  
 	 	 	}  
 	 	 	 
   // Reversing the direction     direction = "right";  
 	 	}  
 	 	else if (direction == "right")  
	 	{  
	 	 	for(int i = 0; i < right.size(); i++)  
	 	 	{  
	 	 	 	cur_track = right.get(i);  
 	 	 
 	 	 	// Appending current track to   	 	 	// seek sequence  
	 	 	 	seek_sequence.add(cur_track);  
 	 
 	 	 	 	// Calculate absolute distance   	 	 	 	distance = Math.abs(cur_track - head);  
 	 
 	 	 	 	// Increase the total count   	 	 	 	seek_count += distance;  
 	 
 	 	 	 	// Accessed track is now new head  
 	 	 	 	head = cur_track;  
 	 	 	}  
 	 	 	 
   // Reversing the direction     direction = "left";  
 	 	}  
 	}  
 	 
 	System.out.println("Total number of seek " +  
 	 	 	 	 	"operations = " + seek_count);  
 	 
System.out.println("Seek Sequence is");  
 
for(int i = 0; i < seek_sequence.size(); i++)  
{  
System.out.println(seek_sequence.get(i));  
}  
}  
 
// Driver code  public static void main(String[] args) throws Exception  
{  
 	 
 	// Request array  
 	int arr[] = { 176, 79, 34, 60,  
 	 	 	 	92, 11, 41, 114 };  
 	int head = 50;  
 	String direction = "right";  
 	 
 	System.out.println("Initial position of head: " +  
 	 	 	 	 	 	head);   	 
 	LOOK(arr, head, direction);  
}  
}  
