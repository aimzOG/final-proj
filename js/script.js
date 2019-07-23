//creates array
const dish = [
  {
    "Name": "popcorn",
    "img": "https://pixnio.com/free-images/2017/07/12/2017-07-12-09-26-17-900x596.jpg",
    "creatorName": "aimee",
    "instagramUrl": "",
    "ingredients": [
      "butter", "salt", "oil", "kernels"
    ],
    "recipe": ["oil your pot.", "Put in 3 kernels and turn heat on high.", "Heat till kernels pop and add more kernels", "melt butter and poor onto popped corn.", "salt popcorn and enjoy!"
    ]
  },
]


const drink = [
  {
    "Name": "",
    "img": "",
    "creatorName": "",
    "instagramUrl": "",
    "ingredients": [
      "", "", "", "", ""
    ],
    "recipe": "",
  },
]


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("toggle").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("toggle").style.marginLeft = "0";
}
