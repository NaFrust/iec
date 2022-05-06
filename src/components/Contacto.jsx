import '../style/Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Contacto = () => {
    return (

        <nav className='contactcontainer'>
            <div className='contactowrap'>
                <h1 className='contactheader'>Contacto</h1>
                <div className='contactbody'>
                    <div className='contactclick'>
                        <div >
                            <div className='contactext'>En Instalaciones Eléctricas Correa trabajamos para brindarte el mejor servicio.<br/> Tu consulta no molesta, podes hacerlo por nuestros diferentes medios:</div>
                        </div>
                        <div className='linkwrap'>
                            <a className='linkto' href="mailto: carlos.correa0470@gmail.com" target="_blank">carlos.correa0470@gmail.com</a><i class="fa-solid fa-envelopes-bulk"/>
                        </div>
                        <div className='linkwrap'>
                            <a className='linkto' href='https://wa.me/541157582365?text=Hola,%20quisiera%20comunicarme%20con%20alguien%20de%20IEC.' target="_blank">+054 11 5758-2365</a><i class="fa-brands fa-whatsapp"/>
                        </div>
                        <div className='contactext'>También podes llenar el formulario y dejarnos un mensaje:</div>
                    </div>
                    <div className='contactform'>
                        <form>
                            <div className='formbox'>
                                <div className='formitems'>
                                    <label className='item'>Nombre</label>
                                    <input className='imputitem' type="text" placeholder='Ingrese su nombre' />
                                </div>
                                <div className='formitems'>
                                    <label className='item'>Telefono</label>
                                    <input className='imputitem' type="text" placeholder='Ingrese su telefono' />
                                </div>
                            </div>
                            <div className='formbox'>
                                <div className='formitems'>
                                <label className='item'>Email</label>
                                <input className='imputitem' type="text" placeholder='Ingrese su direccion de correo'/>
                                </div>
                            </div>
                            <div className='formbox'>
                                <div className='formitems'>
                                <label className='item'>Mensaje</label>
                                <textarea className='imputitem' type="text" placeholder='Ingrese su consulta'></textarea>
                                </div>
                            </div>
                            <div className='btnbox'>
                                <div className='btnwrap'>
                                    <div className='btn'>Enviar</div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Contacto