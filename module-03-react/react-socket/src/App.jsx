import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:4040", {
    autoConnect: false,
    extraHeaders: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ2YTBhMWJlMWZjMmIxOTMyNzMyY2MiLCJpYXQiOjE3MjUzNDE4NjcsImV4cCI6MTc1Njg5OTQ2N30.DOuhKrXwE8rppLBbG0rrensBwbzQDqRr5T5Bv5-iD5Q",
    },
  });

  useEffect(() => {
    socket.connect();
    // socket.on("");

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <h2>Hello</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        illum nesciunt sunt officia nihil? Iusto corporis, impedit dolorem
        laborum eius, vitae quod eveniet dolorum fugit officiis quidem
        recusandae asperiores nisi cupiditate necessitatibus quasi omnis,
        possimus repellat minus. Omnis veritatis necessitatibus ipsum officia
        similique quae minima rem, maiores rerum quo et numquam harum ullam!
        Alias aspernatur atque ipsa dicta consectetur aut beatae mollitia id
        nihil fugiat explicabo tempora commodi ex ipsam, quis cum veniam amet
        laudantium optio? Hic nobis neque quia ipsam quo ducimus architecto,
        dicta accusantium sit nemo quibusdam sed molestias possimus dignissimos
        consectetur qui! Necessitatibus corrupti architecto quae eligendi error
        sint tenetur neque deleniti nostrum modi, vel, illum maxime ex adipisci
        cupiditate laudantium vero totam minima provident? Quae error veniam vel
        quia enim quisquam ducimus nisi maxime ipsam aut reiciendis asperiores,
        omnis iste earum. Error sint officiis, dolore architecto debitis eaque
        quam, illo quaerat doloremque culpa natus laudantium blanditiis tempora
        accusantium voluptatum tenetur. Voluptates quibusdam nihil tempora
        molestias quasi delectus laboriosam totam eos eius nemo? Nesciunt,
        tempore tenetur facere similique accusantium laudantium? Rem illo vitae
        modi quo? Totam accusantium doloremque architecto consectetur ratione
        animi? Quod quis nisi in a vero velit sit vel fuga necessitatibus
        ratione esse iste, magnam temporibus magni hic, porro eos odit
        voluptates. Maxime necessitatibus earum praesentium quo, pariatur
        dignissimos neque dolore perspiciatis dolor consequuntur tempore quos!
        Provident voluptatibus esse similique omnis sint obcaecati, ipsa eveniet
        facilis animi quam veritatis, sunt dignissimos inventore! Amet ullam
        autem delectus alias, ab nam illo suscipit itaque deleniti eligendi
        similique corporis rem facilis unde totam ipsum, atque, quasi iste
        tempore. Dolorem incidunt ullam nihil sit consequatur accusantium
        officiis voluptatem! Vitae, sint error! Alias perspiciatis ea
        exercitationem voluptate dignissimos asperiores dolorem dolorum sunt
        veritatis. Impedit sint aperiam perferendis earum optio, voluptatum
        delectus tempore tempora nulla commodi magni ullam quisquam quae a fugit
        exercitationem neque nesciunt alias enim atque quibusdam aspernatur
        illum odio et? Quidem architecto sequi expedita quasi fugit obcaecati
        error corrupti iste vero nihil hic, in delectus. Nisi, architecto sed.
        Mollitia, ducimus repellendus. Aliquam, natus sunt! Delectus modi sed
        voluptatum porro? Deserunt quam dolores sequi nulla iusto sit incidunt
        tempora hic quaerat enim error, voluptatibus ad quae, voluptas maiores
        repellat alias cumque veritatis non molestias soluta. Vel rerum
        asperiores corrupti dolores aut tenetur ab maxime voluptatem illo cumque
        perspiciatis, consequuntur, quibusdam saepe dolor nihil autem? Inventore
        officiis illum voluptatibus? Totam accusamus cupiditate quia quod
        distinctio voluptatum debitis repudiandae fugiat provident voluptate
        placeat, laudantium fuga molestiae enim ut amet rem dolorem veritatis
        temporibus hic ullam! Neque deserunt sed animi aut rerum molestias
        labore, ut ipsam dolor quas, nam eos nobis impedit eum! Ratione deleniti
        nostrum unde aliquid saepe fugiat, dolorum quam, modi iste doloribus
        tempore? Blanditiis commodi maxime mollitia. Minima nemo pariatur, harum
        laudantium expedita laboriosam nesciunt ipsam sapiente a, ex odio facere
        assumenda accusantium asperiores neque nisi ab ut voluptatibus?
        Veritatis unde delectus eligendi possimus iste. Earum perferendis
        voluptatibus porro dicta perspiciatis commodi doloribus necessitatibus
        officia ea, vero atque. Facilis numquam culpa omnis enim quibusdam velit
        exercitationem voluptatum iure sit dolore officia ullam perspiciatis
        voluptatem iusto tempora distinctio, expedita architecto, reiciendis
        dolorum. Provident cumque ut assumenda ab alias odit, culpa sunt harum
        reiciendis nostrum commodi recusandae iste ullam nihil obcaecati qui
        aliquid illum sit fugit officiis distinctio dolores? Esse, amet
        nesciunt, id voluptatum omnis minima temporibus pariatur dolor porro
        dolore nobis excepturi. Aut reiciendis saepe unde eveniet excepturi
        fugit laborum? Dignissimos repudiandae aspernatur sint. Doloribus,
        totam! Quisquam, ducimus ratione quae rem debitis dolorem assumenda enim
        officia pariatur ad eveniet! Delectus commodi iste possimus illo eos
        consectetur magnam obcaecati dignissimos impedit adipisci eum
        praesentium numquam repellendus debitis esse est eveniet dolore
        quibusdam, rem asperiores atque quas odit! Laudantium assumenda
        perspiciatis commodi delectus sequi quis nostrum, ea architecto? Est
        magnam, cumque fugit, quo delectus natus eveniet porro blanditiis dolor
        ullam dolorum ab laudantium ea consectetur excepturi explicabo eaque
        eligendi iste molestias! Dignissimos minima voluptatibus natus repellat.
        Repudiandae rerum quos omnis harum corporis maiores iusto hic! Dolores
        tenetur aperiam sapiente maiores illo, dignissimos iure, ab quisquam
        facere fuga quae architecto, quibusdam eveniet praesentium et odit.
        Beatae error provident doloribus ratione hic, quod minima optio magnam
        deserunt earum recusandae dolore ipsa aut ab sed reiciendis temporibus
        fuga iste eos saepe veritatis ut possimus. Ad possimus repellat, officia
        rerum vero et necessitatibus ut aliquam error fugit cupiditate aliquid
        quas a fugiat similique praesentium facilis voluptate expedita atque
        nulla tempora. Ratione a nihil rem saepe, voluptatum eos nostrum
        voluptas quos asperiores laudantium, magni ipsa cumque aliquam, incidunt
        laborum distinctio eaque reprehenderit corporis atque ex consectetur.
        Quae earum dolore dignissimos explicabo illo quidem culpa eveniet sequi
        autem similique numquam dolorem ex distinctio dolor laudantium illum
        possimus ipsa, quasi voluptates. Vitae dignissimos magni eius itaque
        ipsa velit, qui minima impedit beatae magnam, dolorem voluptatibus? Vero
        voluptate maxime saepe nemo distinctio placeat nobis dolor eius totam
        aliquid voluptates suscipit consectetur facere deserunt dolore, quas non
        optio dignissimos praesentium necessitatibus dolores quia. Nobis quidem
        dolore voluptatibus dolores quod numquam, voluptatem unde suscipit iure
        facilis consectetur optio placeat hic aperiam porro quo. Voluptates ea
        suscipit tempore, soluta dolores, quas quam iure, iusto deleniti nam
        placeat animi odit eligendi. Ipsa mollitia consequuntur praesentium
        adipisci reprehenderit nobis perspiciatis sunt magnam rerum eligendi,
        neque voluptatum inventore beatae quidem architecto, laborum reiciendis
        similique cupiditate non modi est! Consequatur obcaecati, magni natus
        quibusdam illum exercitationem harum a repellat! Dolore velit error esse
        dolor non. Nostrum ab repellat beatae distinctio et qui omnis voluptates
        pariatur, sequi facilis atque fuga cumque fugit neque harum temporibus,
        inventore corrupti dolores laborum repellendus maiores nemo quae
        doloremque. Neque consequuntur accusamus nostrum debitis et dolor, ad
        incidunt cumque saepe voluptatem ipsa praesentium hic labore quae
        voluptatibus impedit deleniti officia delectus ut doloribus iusto qui
        ratione fugiat omnis. Inventore, nisi quas rem, illum, officiis repellat
        quia provident in cumque ea optio officia aliquid sed perferendis rerum
        veniam maiores eum culpa nobis sit quidem maxime! Nam temporibus quidem
        repudiandae accusantium a nemo modi quam dignissimos minus molestias,
        deleniti at sequi praesentium alias, doloribus facilis ea aliquam eaque
        esse! Enim a explicabo sequi soluta natus maiores, iusto velit libero
        sunt! Eius eligendi quos, aperiam, cumque totam quia, a ut nemo
        veritatis accusamus molestias doloribus inventore soluta. Accusantium
        totam provident eos neque reprehenderit hic et ipsa itaque cumque
        mollitia repellendus rem facilis a, quidem ipsam omnis, ad minima.
        Officiis cum similique deserunt ducimus, possimus eveniet sit quibusdam
        eum, adipisci deleniti magni doloremque aliquam odio? Modi architecto
        nihil libero, fuga in ratione odit totam enim repellat error repudiandae
        harum, repellendus natus. Vel placeat delectus odit aliquam laborum ad
        quod officiis ipsam non tenetur incidunt quam minus suscipit recusandae
        laboriosam neque reiciendis odio repellat ex asperiores, enim architecto
        perferendis in! Inventore corrupti dolor vero hic ullam. Aspernatur
        fuga, est error a sint, alias accusantium itaque esse cum praesentium
        fugit debitis vitae officia odit officiis molestias dolor harum,
        sapiente deleniti! Fugit corrupti soluta consequuntur, quam suscipit at
        voluptates, nisi cum exercitationem ad eligendi perspiciatis inventore
        ea officia? Culpa amet sit maiores accusantium vel vero laborum quisquam
        inventore doloremque, quaerat, rerum modi consectetur laudantium unde
        rem voluptatem, tempore pariatur? Mollitia quod error assumenda
        repellendus ea alias reiciendis iure officia aperiam unde perferendis
        harum odit esse doloremque, tenetur totam omnis. Unde nihil cupiditate
        consequatur dolores similique libero assumenda, vero inventore,
        consectetur, delectus quod asperiores nobis quis id? Sint fuga dolor
        dolore quasi, rem perspiciatis assumenda nam, esse dicta repellendus
        adipisci aut ipsa possimus aperiam nobis obcaecati ex. Hic quisquam
        aliquam voluptatum eos, nemo ipsa consectetur ad, voluptatem, veniam
        itaque aspernatur non sequi accusamus placeat cupiditate eligendi
        possimus commodi repellendus exercitationem dolorem esse iste
        consequuntur illo? Illo repellendus error fugiat, debitis porro
        assumenda atque obcaecati labore voluptas architecto expedita nam. Quo
        pariatur vero atque amet nostrum repellat magnam, enim excepturi est
        iure, similique vitae molestias obcaecati explicabo laboriosam
        architecto? Illo optio minus odio nemo ipsam ad, iste voluptatibus sint
        voluptatum est ducimus placeat quasi quam at facere vero laudantium
        exercitationem, eveniet rem maxime! Autem minima aut ratione est
        repellat officiis, voluptatem veniam voluptas rem laborum veritatis eius
        quos necessitatibus reprehenderit eligendi nesciunt deserunt in dolore
        accusantium maiores. Numquam accusamus quod recusandae aspernatur eos
        voluptatem quos id nobis necessitatibus laboriosam atque possimus nulla
        provident itaque accusantium, eaque temporibus tempore iusto aliquam,
        excepturi eveniet quo sed doloremque. Dolorum ab, eveniet, voluptas
        inventore ducimus unde possimus dignissimos nam eum pariatur laudantium
        similique vel temporibus eligendi sint quo deserunt eius blanditiis
        illo. Voluptate, sint debitis praesentium maiores, officiis culpa
        consequatur repudiandae sunt omnis, enim animi recusandae nihil itaque
        tempore nostrum doloremque dicta quasi. Voluptatibus dicta ipsa dolor
        quidem rem numquam! Sit dolores voluptatibus voluptas error vitae vero
        officiis pariatur nesciunt impedit corrupti? Qui esse dignissimos
        dolores dolor consequuntur saepe accusantium dolorem fugit excepturi
        exercitationem, cumque molestias illum sunt omnis ducimus ex tempora
        facere tempore facilis harum officiis recusandae obcaecati natus vel!
        Aut, atque! Modi error distinctio officia repudiandae odit labore vero
        voluptates ipsa repellendus eligendi assumenda iusto est at rem,
        inventore et, esse omnis cumque quisquam molestias architecto alias
        repellat. Esse assumenda blanditiis eaque perferendis rem consectetur
        quidem! Similique nisi non tenetur temporibus qui sapiente saepe, eaque
        reprehenderit ipsum delectus tempore modi officia distinctio obcaecati
        laudantium nulla pariatur nobis odio. Beatae facilis voluptate aut eos
        dolorum tempore voluptatum quidem ea ab quia laborum deleniti molestiae
        labore, at mollitia. Veritatis similique quibusdam aliquam laboriosam
        aspernatur soluta voluptatem consequatur quia sint error quod est
        tempora magni, earum temporibus! Laboriosam iusto doloribus laudantium.
        Iure necessitatibus doloribus, soluta labore voluptatum impedit maxime?
        Atque ullam molestiae recusandae cupiditate consequuntur tempora nihil
        vel expedita placeat neque soluta modi repellat in sit pariatur magni,
        voluptates quae autem. Atque ex, tempora maiores ipsam error itaque
        perspiciatis facere quam corporis expedita eaque! A omnis, nulla
        blanditiis aperiam nostrum eligendi esse repudiandae excepturi in eum
        qui adipisci odit dolorem repellendus ad incidunt natus placeat alias
        modi inventore eveniet quia enim aliquam. Harum, maxime rem, at
        repudiandae id dignissimos nostrum ullam aspernatur sequi iste, enim nam
        maiores! Distinctio alias quisquam eius, ipsa aspernatur necessitatibus
        ea. Rem mollitia, veritatis autem explicabo praesentium eius officia
        temporibus amet reiciendis sequi dicta repellendus numquam enim esse
        officiis nobis at nesciunt ut aliquam iusto ex? Laboriosam animi tempore
        necessitatibus nostrum obcaecati eligendi nisi dolores? Vero earum
        tempora temporibus doloremque quas, in odit quos rerum delectus debitis
        minus neque eligendi excepturi ab necessitatibus qui eveniet similique!
        In inventore quas, dolor vero quis, maiores quo voluptatem sapiente
        voluptates quidem dolorum fugiat unde totam soluta! Atque
        exercitationem, fuga architecto, quaerat eos assumenda amet doloribus
        natus, quam iste obcaecati facilis sint perferendis fugiat labore nam
        placeat debitis? Qui impedit minima est obcaecati cum doloremque
        exercitationem blanditiis consectetur, adipisci repudiandae vero velit
        ex commodi, totam, molestiae quae placeat voluptatem natus deserunt
        consequatur itaque non sit. Repellendus facilis labore sint repudiandae
        a, delectus voluptates eos consequuntur voluptatibus doloremque ratione
        vero ex at fugiat quibusdam deleniti iste quas aut, libero debitis enim
        ullam ut perferendis quos? Libero rerum ab ex dolor, officiis a
        laboriosam, ad similique perferendis esse, illo beatae! Expedita
        praesentium ipsa cupiditate. Vitae in numquam cumque adipisci dolore,
        quo voluptates deleniti magni eos perferendis aliquid eius aperiam
        necessitatibus sunt illo illum architecto quisquam veniam. Voluptatem
        similique quod molestiae, earum ea aliquid illum minima perferendis
        tenetur doloremque consectetur laborum? Magni id voluptate illum. Quo a
        illum, distinctio ipsum pariatur vero praesentium officiis nobis ipsa
        maxime fuga, alias, voluptatem architecto laudantium quam quis tenetur
        laboriosam qui quibusdam necessitatibus. Velit sint non minus
        perspiciatis quam impedit quod ad vitae expedita deserunt illum, ratione
        asperiores vel esse ut odio omnis error eos molestias nobis quia laborum
        excepturi nostrum dolor! Placeat, neque? Asperiores porro magni
        similique culpa doloremque neque animi facilis distinctio ad delectus
        itaque, iste perspiciatis, rem maxime consequuntur non voluptate
        laudantium, expedita cum pariatur nostrum fuga modi rerum. Aut cumque
        voluptatibus ex numquam, distinctio incidunt illo veniam dicta esse,
        mollitia laboriosam quidem pariatur. Eveniet nulla autem maiores
        consequuntur saepe, cupiditate sequi facilis id quo accusamus, ipsa
        delectus veniam error beatae eos odio quos quae? Tempore doloribus nihil
        corporis nam labore, architecto ipsum deserunt vero deleniti minima
        inventore molestias laborum rerum delectus facilis dignissimos tenetur
        error illo possimus voluptatibus? Autem, est?
      </p>
    </div>
  );
}

export default App;
