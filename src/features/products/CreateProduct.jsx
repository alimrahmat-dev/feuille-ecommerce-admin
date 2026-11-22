import Input from "../../components/formComponents/Input";
import Modal from "../../components/Modal";

export default function CreateProduct() {
  //dataTable
    // const productForm = [
    //     { name: 'name', label: 'Nama', type: 'text', as:"input", },
    //     { name: 'email', description: 'Deskripsi', type: 'text', as:"text"},
    //     { name: 'category_id', label: 'Kategori', type: 'password', as:"select"},
    //     { name: 'base_price', label: 'Harga Dasar', type: "text", as:"input", inputType : "price"},
    //     { name: 'is_active', label: 'Status Aktif', type: 'radio', as:"input"},
    // ]

    const [harga, setHarga] = useState()

     const formatKeRupiah = (angka) => {
                const numberString = angka.replace(/[^,\d]/g, "").toString();

                const split = numberString.split(",");
                const sisa = split[0].length % 3;
                let rupiah = split[0].substr(0, sisa);
                const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

                if (ribuan) {
                        const separator = sisa ? "." : "";
                        rupiah += separator + ribuan.join(".");
                }

                rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
                return rupiah ? "Rp " + rupiah : "";
        };

        const handleChange = (e) =>{
            const inputHarga = e.target.value
            setHarga(formatKeRupiah(inputHarga))
        }


    return (
        <Modal>
            <Input type={"text"} name={'name'} placeholder={"Nama Produk"} label={"Produk"} />
            <Input type={"text"} name={'name'} placeholder={"Nama Produk"} label={"Produk"} />
            <Input type={"text"} name={'name'} placeholder={"Nama Produk"} label={"Produk"} />
            <Input type={"text"} name={'name'} placeholder={"Nama Produk"} label={"Produk"}onChange={handleChange}    />
            <InputHarga name={'base_price'} placeholder={"Masukan Harga"} label={"Harga"}></InputHarga>
        </Modal>
    )
} 