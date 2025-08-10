//////////// Simple Interest হিসাব ////////////
//Formula: SI =  P * R * T / 100

/** যেখানে:
 * P = Principal amount
 * R = Rate of interest
 * T = Time (years)
 */

   function si(p, r, t) {
      let interest = (p * r * t) / 100
      return interest
   }
   
   let outputSI = si(10000, 5, 3)
   console.log(outputSI)

/** Exp : 
 * ধরো, তুমি ১০,০০০ টাকা ব্যাংকে ৩ বছর জন্য ৫% বার্ষিক সুদে জমা দিয়েছো।
 * এখন কত সুদ পাবে সেটা বের করতে হবে।
 * Interest = 1500 টাকা
 */