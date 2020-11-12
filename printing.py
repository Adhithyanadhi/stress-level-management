import sys

x = int(sys.argv[1]) + int(sys.argv[2]) + int(sys.argv[3]) + int(sys.argv[4]) + int(sys.argv[5]) + int(sys.argv[6]) + int(sys.argv[7]) + int(sys.argv[8]) + int(sys.argv[9]) + int(sys.argv[10]) ;

if x >= 0 and x <= 16:
	print("low")
elif x > 16 and x <= 26:
	print("medium")
else:
	print("high")
