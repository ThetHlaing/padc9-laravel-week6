



  //create dog objects
  const dog1 = new Dog(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/01142236/Poodle-Care1.jpg",
    "Labrador Retriever", "Aung Nat");
  const dog2 = new Dog(
    "https://vetstreet.brightspotcdn.com/dims4/default/3410cbe/2147483647/crop/432x371%2B156%2B0/resize/320x275/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F6a%2Fa5%2F6f2cf3ee4fc08c8b251f4876dd8e%2Fbrussels-griffon-ap-0qlbnz-645x-380.jpg",
    "Poodle", "Yan Lone");
  const dog3 = new Dog(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/01142236/Poodle-Care1.jpg",
    "Poodle", "STH");

  const dogarray = [dog1, dog2, dog3];

  //select li and insert returned html as object
  const nodelist = document.querySelectorAll("#dog-breed li");

  for (let item of nodelist) {
    const randomIndex = Utility.getRandomIntInclusive(0, dogarray.length - 1);
    item.innerHTML = dogarray[randomIndex].display();
  }