// dataStore.js
import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

interface CartItem {
  id: number;
  quantity: number;
  pprice: string;
  discountpre: number;
  pname: string;
  psku: string;
  talla: string;
}

interface TableData {
  id: number;
  price1: string;
  price2: string;
  price3: string;
  price4: string;
  price5: string;
  price6: string;
  price7: string;
  price8: string;
  price9: string;
  name1: string;
  price10: string;
  price11: string;
  price12: number;
  price13: string;
  price14: string;
  price15: string;
  price16: string;
  textColorBlue: string;
  bgColor: string;
  textColor: string;
  selected: boolean; // Add the selected property
}


export const useDataStore = defineStore("dataStore", {
  state: () => ({
    // Define your data here
    tableData: [
      {
        id: 1,
        pname: "Family Sport1",
        price2: "sport",
        price3: "",
        psku: "0D3HY29",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "21.5",
        price13: "5",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "green",
        bgColor: "yellow",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 2,
        pname: "Family Sport2",
        price2: "Tienda 2",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "22.5",
        price13: "0",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "red",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 3,
        pname: "Family Sport3",
        price2: "Tienda 3",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "23.5",
        price13: "8",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "yellow",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 4,
        pname: "Family Sport4",
        price2: "Tienda 4",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "24.5",
        price13: "1",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "yellow",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 5,
        pname: "Family Sport5",
        price2: "Web Store",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "25.5",
        price13: "4",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "yellow",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 6,
        pname: "Family Sport6",
        price2: "Tienda 1",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "26.5",
        price13: "5",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "yellow",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 7,
        pname: "Family Sport7",
        price2: "Tienda 2",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "29.5",
        price13: "11",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "red",
        textColor: "green",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 8,
        pname: "Family Sport8",
        price2: "Tienda 3",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "34.5",
        price13: "9",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "yellow",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 9,
        pname: "Family Sport9",
        price2: "Tienda 4",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "38.5",
        price13: "18",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "green",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
      {
        id: 10,
        pname: "Family Sport10",
        price2: "Web Store",
        price3: "",
        psku: "0D3HY28",
        price5: "TANIS VANS UNI OLD SKOOL",
        price6: "700053803855",
        price7: "Calzado",
        price8: "Vans",
        price9: "Tenis",
        name1: "S/C",
        price10: "Unisex",
        price11: "Nagro-Blanco",
        talla: "18.5",
        price13: "10",
        pprice: "$1,299.00",
        price15: "001R1G16-22",
        price16: "42158",
        textColorBlue: "#39B54A",
        bgColor: "yellow",
        textColor: "blue",
        quantity: 1,
        color: "GW9252",
        type: "22.5",
        discountpre: 10,
        img: "@/assets/images/shoes.png",
      },
    ],
    extistianceTableData: [
      {
          id: 1,
          price1: "Family Sport1",
          price2: "Tienda 1",
          price3: "",
          price4: "0D3HY29",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 21.0,
          price13: "5",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "green",
          bgColor: "yellow",
          textColor: "blue",
          selected: false
        },
        {
          id: 2,
          price1: "Family Sport2",
          price2: "Tienda 2",
          price3: "",
          price4: "0D3HY28",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 22.0,
          price13: "0",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "red",
          textColor: "blue",
          selected: false
        },
        {
          id: 3,
          price1: "Family Sport3",
          price2: "Tienda 3",
          price3: "",
          price4: "0D3HY26",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 23.0,
          price13: "8",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "yellow",
          textColor: "blue",
          selected: false
        },
        {
          id: 4,
          price1: "Family Sport4",
          price2: "Tienda 4",
          price3: "",
          price4: "0D3HY27",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 24.0,
          price13: "1",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "yellow",
          textColor: "blue",
          selected: false
        },
        {
          id: 5,
          price1: "Family Sport5",
          price2: "Web Store",
          price3: "",
          price4: "0D3HY30",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 25.0,
          price13: "4",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "yellow",
          textColor: "blue",
          selected: false
        },
        {
          id: 6,
          price1: "Family Sport6",
          price2: "Tienda 1",
          price3: "",
          price4: "0D3HY31",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 26.0,
          price13: "5",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "yellow",
          textColor: "blue",
          selected: false
        },
        {
          id: 7,
          price1: "Family Sport7",
          price2: "Tienda 2",
          price3: "",
          price4: "0D3HY32",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 29.0,
          price13: "11",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "red",
          textColor: "green",
          selected: false
        },
        {
          id: 8,
          price1: "Family Sport8",
          price2: "Tienda 3",
          price3: "",
          price4: "0D3HY33",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 34.0,
          price13: "9",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "yellow",
          textColor: "blue",
          selected: false
        },
        {
          id: 9,
          price1: "Family Sport9",
          price2: "Tienda 4",
          price3: "",
          price4: "0D3HY34",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 38.0,
          price13: "18",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "green",
          textColor: "blue",
          selected: false
        },
        {
          id: 10,
          price1: "Family Sport",
          price2: "Web Store",
          price3: "",
          price4: "0D3HY35",
          price5: "TANIS VANS UNI OLD SKOOL",
          price6: "700053803855",
          price7: "Calzado",
          price8: "Vans",
          price9: "Tenis",
          name1: "S/C",
          price10: "Unisex",
          price11: "Nagro-Blanco",
          price12: 18.0,
          price13: "10",
          price14: "$1,299.00",
          price15: "001R1G16-22",
          price16: "42158",
          textColorBlue: "#39B54A",
          bgColor: "yellow",
          textColor: "blue",
          selected: false
        },
    ],
    cart: [] as CartItem[],
    Total: 0,
    Subtotal: 0,
    discountamount: 0,
    updatedImg: "@/assets/images/shoes.png",
    lastselect: [
      { img: "../../assets/images/shoes.png", talla: "22.5", stock: "9" },
    ],
  }),

  actions: {
    addToCart(id: number) {

      const itemIndex = this.cart.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        // If the item is not already in the cart, add it
        const newItem = this.tableData.find((item) => item.id === id);
        if (newItem) {
          this.cart.push({ ...newItem }); // Add the item to the cart
        }
      } else {
        // If the item is already in the cart, update its quantity
        if ("quantity" in this.cart[itemIndex]) {
          // Check if quantity property exists
          (this.cart[itemIndex] as CartItem).quantity++;
        }
      }
    },

    lastSelect(id:number){
      const itemIndex = this.tableData.findIndex((item)=>item.id == id)
      if (itemIndex !== -1) {
        const selectedItem = this.tableData[itemIndex];
        this.lastselect = [{
          img: selectedItem.img,
          talla: selectedItem.talla,
          stock: selectedItem.price13,
        }];
      }
    },

    removeToCart(id: number) {
      const itemIndex = this.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        this.cart.splice(itemIndex, 1); // Remove the item at the found index
      }
    },

    clearAllCart() {
      this.cart = [];
    },

    increaseQuantity(id: Number) {
      const itemIndex = this.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        (this.cart[itemIndex] as CartItem).quantity++;
      }
    },

    decreaseQuantity(id: number) {
      const itemIndex = this.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        if ((this.cart[itemIndex] as CartItem).quantity === 1) {
          this.cart.splice(itemIndex, 1);
        } else {
          (this.cart[itemIndex] as CartItem).quantity--;
        }
      }
    },

    overallPrice(total: number, subtotal: number, totaldiscount: number) {
      this.Total = total;
      this.Subtotal = subtotal;
      this.discountamount = totaldiscount;
    },
  },
});
