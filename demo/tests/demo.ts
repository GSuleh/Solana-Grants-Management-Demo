import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Demo } from "../target/types/demo";

describe("demo", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Demo as Program<Demo>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
