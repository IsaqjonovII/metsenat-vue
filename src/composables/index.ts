import { ref } from "vue";

interface ISponsors {
  id: number;
  full_name: string;
  phone: string;
  sum: number;
  get_status_display: string;
  spent: number;
  created_at: string;
}

export function usePagination() {
  const currentPageData = ref();
  const currentPageInx = ref(1);

  async function getSponsors() {
    try {
      const response = await fetch(
        `https://club.metsenat.uz/api/v1/sponsor-list/?page=${currentPageInx.value}`
      );
      const data = await response.json();

      if (data) {
        currentPageData.value = data;
      }
    } catch (error) {
    }
  }
  getSponsors();

  const nextPage = () => {
    currentPageInx.value++;
    getSponsors();
    
    console.log(currentPageData.value)

  };
  const prevPage = () => {
    currentPageInx.value !== 1 && currentPageInx.value--;
    getSponsors();
    console.log(currentPageData.value)
  };

  return {
    currentData: currentPageData,
    nextPage,
    prevPage,
    currentPage: currentPageInx,
  };
}
