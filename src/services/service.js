import api from "./api";

 

   const getData = async () => {
  try {
    const response = await api.get('');
    console.log('Data GET:', response.data);
  } catch (error) {
    console.error('Gagal mengambil data:', error);
  }
};
export {getData}