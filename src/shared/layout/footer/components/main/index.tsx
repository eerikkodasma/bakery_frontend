import Button from "@/shared/components/button";
import Input from "@/shared/components/input";
import { ButtonTypes } from "@/shared/types/button";

export default function MainFooter() {
  return (
    <div className="mb-4 bg-yellow-50">
      <div className="container flex flex-col gap-8">
        <section className="text-[60px]">Logo</section>
        <div className="flex flex-col gap-4">
          <section>
            <h3 className="mb-2">Shop</h3>
            <div className="flex flex-col gap-1">
              <p>Coffee</p>
              <p>Pies</p>
              <p>Sweets</p>
            </div>
          </section>
          <section>
            <h3 className="mb-2">Company</h3>
            <div className="flex flex-col gap-1">
              <p>About</p>
              <p>Our Story</p>
              <p>Contact</p>
              <p>Policy</p>
            </div>
          </section>
          <section>
            <h3 className="mb-2">Get the latest news & offers</h3>
            <div className="flex max-w-96 flex-col gap-1">
              <Input
                id="news_letter"
                placeholder="Email Address"
                ariaLabel="email address textbox"
              />
              <Button type={ButtonTypes.PRIMARY} onClick={() => undefined}>
                Subscribe
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
