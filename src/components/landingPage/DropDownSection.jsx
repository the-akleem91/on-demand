import * as React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/Select"
import Container from "../BasicLayout/Container"
import UploadImage from "../BasicLayout/uploadButton"



export function SelectDemo() {
    return (
        <section>
            <Container>
                <h1 className='font-semibold text-white text-center mb-2 text-2xl  bg-gradient-to-r from-[#0066FE] to-[#3BCD92]  text-transparent bg-clip-text mt-16'>Know what is better for you
                </h1>
                <p className="text-center text-xl text-gray-500 mb-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex offici</p>
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="grid grid-cols-3 gap-16">
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Select a timezone" className="text-white" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>North America</SelectLabel>
                                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Europe & Africa</SelectLabel>
                                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                    <SelectItem value="west">
                                        Western European Summer Time (WEST)
                                    </SelectItem>
                                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Asia</SelectLabel>
                                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                    <SelectItem value="ist_indonesia">
                                        Indonesia Central Standard Time (WITA)
                                    </SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Australia & Pacific</SelectLabel>
                                    <SelectItem value="awst">
                                        Australian Western Standard Time (AWST)
                                    </SelectItem>
                                    <SelectItem value="acst">
                                        Australian Central Standard Time (ACST)
                                    </SelectItem>
                                    <SelectItem value="aest">
                                        Australian Eastern Standard Time (AEST)
                                    </SelectItem>
                                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>South America</SelectLabel>
                                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                    <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Select a timezone" className="text-white" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>North America</SelectLabel>
                                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Europe & Africa</SelectLabel>
                                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                    <SelectItem value="west">
                                        Western European Summer Time (WEST)
                                    </SelectItem>
                                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Asia</SelectLabel>
                                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                    <SelectItem value="ist_indonesia">
                                        Indonesia Central Standard Time (WITA)
                                    </SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Australia & Pacific</SelectLabel>
                                    <SelectItem value="awst">
                                        Australian Western Standard Time (AWST)
                                    </SelectItem>
                                    <SelectItem value="acst">
                                        Australian Central Standard Time (ACST)
                                    </SelectItem>
                                    <SelectItem value="aest">
                                        Australian Eastern Standard Time (AEST)
                                    </SelectItem>
                                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>South America</SelectLabel>
                                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                    <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div>
                            <input placeholder="Enter your text" className="py-2 rounded-md px-2 w-full bg-[#161616] border border-input bg-background text-white" />
                        </div>

                    </div>

                    <p className="text-gray-500">OR</p>
                    <div className="text-gray-500">
                        <UploadImage size={72} />
                    </div>
                </div>
            </Container>
        </section>
    )
}
