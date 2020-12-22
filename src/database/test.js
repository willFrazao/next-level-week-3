const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db => {

  // inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat:'-22.6057684',
  //   lng:'-42',
  //   name: 'Lar dos punks',
  //   about: 'Presta assistência a punks com mais de 30 anos que se perderao na vida.',
  //   whatsapp: '2196668-6667',
  //   images: [
  //     'https://images.unsplash.com/photo-1565744643998-5c196cf891f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080',

  //     'https://images.unsplash.com/photo-1563465814437-b1a057a461ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080'
  //   ].toString(),
  //   instructions:'Venha como se sentir a vontade e traga skates e uma caixa de som.',
  //   opening_hours: 'Horário de visitas Das 18h ás 8h',
  //   open_on_weekends: '0'
  // })

  // consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orphanato, pelo o id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"');
  // console.log(orphanage);

  // deletar dado da tabela
  // console.log(await db.run('DELETE FROM orphanages'));
})