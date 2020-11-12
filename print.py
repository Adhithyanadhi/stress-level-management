import sys
import turicreate as tc
load = tc.load_model("predicty.model")
data = {
  "ECG": float(sys.argv[1]),
  "EMG": float(sys.argv[2]),
  "handGSR": float(sys.argv[3]),
  "HR": float(sys.argv[4]),
  "RESP": float(sys.argv[5]),
  "footGSR": float(sys.argv[6]),
  "NNRR": float(sys.argv[7]),
  "AVNN": float(sys.argv[8]),
  "SDNN": float(sys.argv[9]),
  "RMSSD": float(sys.argv[10]),
  "pNN50": float(sys.argv[11])
}

y = load.predict(data)
x = y[0]
if x >= 0 and x <= 13:
	print("low")
elif x > 13 and x <= 35:
	print("medium")
elif x <= 40:
	print("high")
else :
	print(x)