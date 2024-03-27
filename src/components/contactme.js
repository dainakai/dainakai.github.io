export const ContactMe = () => {
    return (
        <div className="contactme">
            <h2 className='contactme_title'>Contact</h2>
            <p className='contactme_text'>If you want to contact me, please email at <a href="mailto:m2623119@edu.kit.ac.jp">m2623119 at edu.kit.ac.jp</a> (please replace 'at' with '@')</p>
            {/* ./home/topimage_2023_0614.jpg をページサイズの90%で表示。画像下部にコメント */}
            <figure className="contactmeimg">
                <img src="/img/home/topimage_2023_0614.jpg" alt="topimage" width="90%" />
                <figcaption className="figcap">Lovely scenery of the Kamo River in Kyoto</figcaption>
            </figure>
        </div>
    );
}