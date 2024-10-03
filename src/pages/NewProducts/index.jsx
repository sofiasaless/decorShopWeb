import './style.css';

export default function NewProducts() {
    return (
        <>
            <h3 className='text-center fw-bold text-uppercase mb-4'>Poste um novo produto e automaticamente estará disponível no seu site!</h3>
            <form id='post-form' className='rounded-3 shadow'>
                <div class="mb-2">
                    <label for="exampleInputName" class="ms-1 form-label text-uppercase fw-bold">Nome do produto</label>
                    <input class="form-control" type="text" placeholder="Ex: Calendário temático" aria-label="default input example"/>
                </div>

                <div class="mb-2">
                    <label for="exampleFormControlTextarea1" class="ms-1 form-label text-uppercase fw-bold">Descrição</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Ex: O calendário temático é feito com ...'></textarea>
                </div>

                <div class="row mb-2">
                    <div class="col">
                        <label for="price" class="ms-1 form-label text-uppercase fw-bold">Preço</label>
                        <input id='price' type="number" class="form-control" min={0} placeholder="Ex: 20.99"/>
                    </div>
                    <div class="col">
                        <label for="stock" class="ms-1 form-label text-uppercase fw-bold">Estoque</label>
                        <input id='stock' type="number" class="form-control" min={0} placeholder="Ex: 2"/>
                    </div>
                </div>

                <div class="mb-2">
                    <label for="image" class="ms-1 form-label text-uppercase fw-bold">Imagem</label>
                    <input id='image' type="url" class="form-control" min={0} placeholder='Ex: https://i.pinimg.com/736x/ce/48/ba/ce48ba6ee9adc9904cb8024897b86377.jpg'/>
                </div>

                <div id='btn-group'>
                    <button type="submit" id='cadastrar' class="btn rounded-5 text-lowercase">Cadastrar novo produto</button>
                    <button type="button" id='limpar' class="btn rounded-5 text-lowercase">Limpar</button>
                </div>
            </form>
        </>
    );
}