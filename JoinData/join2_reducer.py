#!/usr/bin/env python
import sys


def RepresentsInt(s):
    try: 
        int(s)
        return True
    except ValueError:
        return False
prev_word          = "  "                #initialize previous word  to blank string
values 		   = []
count		   = 0

# see https://docs.python.org/2/tutorial/datastructures.html for list details

line_cnt           = 0  #count input lines

for line in sys.stdin:
    line       = line.strip()       #strip out carriage return
    key_value  = line.split('\t')   #split line, into key and value, returns a list
    line_cnt   = line_cnt+1     

    #note: for simple debugging use print statements, ie:  
    curr_word  = key_value[0]         #key is first item in list, indexed by 0
    value_in   = key_value[1]         #value is 2nd item
    
	
    # Check if its a new word and not the first line 
    #   (b/c for the first line the previous word is not applicable)
    #   if so then print out list of dates and counts
    if curr_word != prev_word:

        # -----------------------     
	#now write out the join result, but not for the first line input
        # -----------------------
        if line_cnt>1:
	    if("ABC" in values):
		 for i in range(len(values)):
	 	     if(RepresentsInt(values[i])):
		         count = count + int(values[i])
		 print('{0} {1}'.format(prev_word,count))
		 count=0
	    values=[]
               
        prev_word         =curr_word  #set up previous word for the next set of input lines
   
    values.append(value_in)

if("ABC" in values):
    for i in range(len(values)):
        if(RepresentsInt(values[i])):
            count = count + int(values[i])
    print('{0} {1}'.format(curr_word,count))
