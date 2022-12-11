import Hero from "./Hero";
import Vision from "./Vision";
import vision1 from "./../assets/anemo.png"
import vision2 from "./../assets/cryo.png"
import vision3 from "./../assets/dendro.png"
import vision4 from "./../assets/electro.png"
import vision5 from "./../assets/geo.png"
import vision6 from "./../assets/hydro.png"
import vision7 from "./../assets/pyro.png"
import Town from "./Town";
import town1 from "./../assets/mondstadt.jpg"
import town2 from "./../assets/liyue.png"
import town3 from "./../assets/inazuma.jpg"

const Maincontent = () => {
    return (
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Vision</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12 mt-2">
                        <Vision image={vision1} title="Anemo" />
                    </div>
                    <div className="col-lg-4 col-12 mt-2">
                        <Vision image={vision2} title="Cryo" />
                    </div>
                    <div className="col-lg-4 col-12 mt-2">
                        <Vision image={vision3} title="Dendro" />
                    </div>
                    <div className="col-lg-4 col-12 mt-2">
                        <Vision image={vision4} title="Electro" />
                    </div>
                    <div className="col-lg-4 col-12 mt-2">
                        <Vision image={vision5} title="Geo" />
                    </div>
                    <div className="col-lg-4 col-12 mt-2">
                        <Vision image={vision6} title="Hydro" />
                    </div>
                    <div className="col-lg-4 col-12 mt-2">
                        <Vision image={vision7} title="Pyro" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Region</h1>
                    </div>
                    <div className="col-12 my-3">
                        <Town image={town1} />
                    </div>
                    <div className="col-12 my-3">
                        <Town image={town2} />
                    </div>
                    <div className="col-12 my-3">
                        <Town image={town3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent