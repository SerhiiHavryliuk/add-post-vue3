// Чтобы не делать импорт в каждом элементе
// создаем однифайл для импорта и подключаем ко всем страницам

import MyBtn from "@/components/UI/MyBtn";
import MyInput from "@/components/UI/MyInput";
import MyDialog from "@/components/UI/MyDialog";
import MySelect from "@/components/UI/MySelectVue";

export default {
    MyBtn, MyInput, MyDialog, MySelect
}