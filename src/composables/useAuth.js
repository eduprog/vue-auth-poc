import { login } from '../api/authApi';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'vue-router';
import { getPeople } from '../api/peopleApi';
import { ref } from 'vue';


// Definir um tipo para a resposta de getPeople
class PeopleResponse {
  constructor(items = [], pageIndex = 1, pageSize = 1, totalItems = 0, totalPages = 0, hasPrevious = false, hasNext = false) {
    this.items = items;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
  }
}

// Defina um tipo para Pessoa
class itemsPessoa {
  constructor(id, idAlternativo, classificacaoPessoa, fisJur, docCpfCnpj, nome, apelidoFantasia, docIdentidade, ativo) {
    this.id = id;
    this.idAlternativo = idAlternativo;
    this.classificacaoPessoa = classificacaoPessoa;
    this.fisJur = fisJur;
    this.docCpfCnpj = docCpfCnpj;
    this.nome = nome;
    this.apelidoFantasia = apelidoFantasia;
    this.docIdentidade = docIdentidade;
    this.ativo = ativo;
  }
}

export function useAuth() {
 
  const authStore = useAuthStore();
  const router = useRouter();
  const people = ref(new PeopleResponse()); // Initialize people as a ref

  const authenticate = async (credentials) => {
    try {
      
      const tokens = await login(credentials);
      authStore.setToken(tokens);
      console.log('Token:', authStore.accessToken );

      const response = await getPeople();

// Criar o objeto PeopleResponse com os dados da resposta
people.value = new PeopleResponse(
  response.items.map(item => new itemsPessoa(
    item.id,
    item.idAlternativo,
    item.classificacaoPessoa,
    item.fisJur,
    item.docCpfCnpj,
    item.nome,
    item.apelidoFantasia,
    item.docIdentidade,
    item.ativo
  )),
  response.pageIndex,
  response.pageSize,
  response.totalItems,
  response.totalPages,
  response.hasPrevious,
  response.hasNext
);

      console.log('Quantidade de pessoas:', people.value.items.length);
      //console.log('pessoa reativa:', people);
      console.log('Pessoas:', people.value.items);

      //.router.push('/people');
    } catch (err) {
      console.error('Erro ao autenticar:', err);
      alert('Falha na autenticação');
    }
  };

  return { authenticate, people};
}
